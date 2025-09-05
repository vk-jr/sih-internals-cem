import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CreateTeam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    leaderEmail: "",
    leaderName: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Generate team code
      const { data: teamCode } = await supabase.rpc('generate_team_code');
      
      // Create team
      const { data: team, error: teamError } = await supabase
        .from('teams')
        .insert([{
          team_code: teamCode,
          team_name: formData.teamName,
          leader_email: formData.leaderEmail,
          leader_name: formData.leaderName
        }])
        .select()
        .single();

      if (teamError) throw teamError;

      // Add leader as team member
      await supabase
        .from('team_members')
        .insert([{
          team_id: team.id,
          member_email: formData.leaderEmail,
          member_name: formData.leaderName,
          is_leader: true
        }]);

      toast({
        title: "Team Created Successfully!",
        description: `Your team code is: ${teamCode}. Share this with your team members.`
      });

      navigate('/team-formation');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create team. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-official-blue">Create Team</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="teamName">Team Name *</Label>
                  <Input
                    id="teamName"
                    value={formData.teamName}
                    onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="leaderName">Leader Name *</Label>
                  <Input
                    id="leaderName"
                    value={formData.leaderName}
                    onChange={(e) => setFormData(prev => ({ ...prev, leaderName: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="leaderEmail">Leader Email *</Label>
                  <Input
                    id="leaderEmail"
                    type="email"
                    value={formData.leaderEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, leaderEmail: e.target.value }))}
                    required
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => navigate('/team-formation')} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1">Create Team</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CreateTeam;