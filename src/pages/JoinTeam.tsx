import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const JoinTeam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [teamCode, setTeamCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, get the team details using the team code
      const { data: team, error: teamError } = await supabase
        .from('teams')
        .select('*')
        .eq('team_code', teamCode.toUpperCase())
        .single();

      if (teamError) throw teamError;

      if (!team) {
        toast({
          title: "Team Not Found",
          description: "Please check the team code and try again.",
          variant: "destructive"
        });
        return;
      }

      if (team.status !== 'open') {
        toast({
          title: "Team Not Available",
          description: "This team is no longer accepting new members.",
          variant: "destructive"
        });
        return;
      }

      // Get the current user's registration details
      const { data: registration, error: regError } = await supabase
        .from('registrations')
        .select('email, full_name')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (regError) throw regError;

      // Check if already a member
      const { data: existingMember } = await supabase
        .from('team_members')
        .select('id')
        .eq('team_id', team.id)
        .eq('member_email', registration.email)
        .single();

      if (existingMember) {
        toast({
          title: "Already a Member",
          description: "You are already a member of this team.",
          variant: "destructive"
        });
        return;
      }

      // Add user to the team
      const { error: joinError } = await supabase
        .from('team_members')
        .insert([
          {
            team_id: team.id,
            member_email: registration.email,
            member_name: registration.full_name,
            is_leader: false
          }
        ]);

      if (joinError) throw joinError;

      toast({
        title: "Successfully Joined Team!",
        description: `You have joined team "${team.team_name}".`
      });

      navigate('/team-formation');
    } catch (error) {
      console.error('Error joining team:', error);
      toast({
        title: "Error",
        description: "Failed to join team. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-8 px-6">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-official-blue">Join Team</CardTitle>
              <p className="text-sm text-muted-foreground">
                Enter the team code to join an existing team
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="teamCode">Team Code *</Label>
                  <Input
                    id="teamCode"
                    placeholder="Enter 6-digit team code"
                    value={teamCode}
                    onChange={(e) => setTeamCode(e.target.value)}
                    maxLength={6}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/team-formation')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? "Joining..." : "Join Team"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default JoinTeam;
