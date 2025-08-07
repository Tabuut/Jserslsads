import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast"; // المسار الصحيح لـ useToast هو في مجلد hooks

function App() {
  const { toast } = useToast();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Button
          onClick={() => {
            toast({
              title: "Build Successful!",
              description: "All components and configurations are now correct.",
            });
          }}
        >
          Show Toast
        </Button>
      </main>
      <Toaster />
    </>
  );
}

export default App;
