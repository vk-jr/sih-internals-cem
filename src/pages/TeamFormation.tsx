import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamFormation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-official-blue mb-2">
                Smart India Hackathon - Internals
              </CardTitle>
              <p className="text-lg font-medium text-official-navy">(UCER) Registration</p>
              <p className="text-sm text-muted-foreground">
                Register for SIH Internals (UCER)
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Team Formation Section */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Team Formation</h3>
                </div>
                <p className="text-sm text-green-700 mb-6">
                  Create a new team or join using the team code. This stage is optional.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    onClick={() => navigate('/create-team')}
                    className="flex flex-col items-center gap-2 h-auto py-4 bg-green-600 hover:bg-green-700"
                  >
                    <Plus className="h-6 w-6" />
                    <span className="font-medium">Create Team</span>
                    <span className="text-xs opacity-90">Be a team leader & create your squad</span>
                  </Button>
                  
                  <Button 
                    onClick={() => navigate('/join-team')}
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4 border-green-300 text-green-700 hover:bg-green-50"
                  >
                    <Users className="h-6 w-6" />
                    <span className="font-medium">Join Team</span>
                    <span className="text-xs opacity-70">Enter team code to join</span>
                  </Button>
                  
                  <Button 
                    onClick={() => navigate('/find-teams')}
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4 border-green-300 text-green-700 hover:bg-green-50"
                  >
                    <Search className="h-6 w-6" />
                    <span className="font-medium">Find Teams</span>
                    <span className="text-xs opacity-70">Discover available teams</span>
                  </Button>
                </div>
              </div>

              {/* WhatsApp Community Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Join Our WhatsApp Community</h3>
                <p className="text-sm text-blue-700 mb-4">
                  Stay updated with announcements, networking opportunities and get real SIH 2025 updates!
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Join WhatsApp Group
                </Button>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/register')}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary-hover">
                  Next Step
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TeamFormation;