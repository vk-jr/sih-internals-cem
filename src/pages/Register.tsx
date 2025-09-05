import Header from "@/components/Header";
import RegistrationForm from "@/components/RegistrationForm";
import ProcessSteps from "@/components/ProcessSteps";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Registration Form */}
          <div className="flex justify-center">
            <RegistrationForm />
          </div>
          
          {/* Right Side - Process Steps */}
          <div className="flex justify-center lg:justify-start">
            <ProcessSteps />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;