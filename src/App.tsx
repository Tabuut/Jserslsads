import { Button } from "./components/ui/button";
import { useToast } from "./components/ui/use-toast";
import { Toaster } from "./components/ui/toaster"; // تم تصحيح مسار الاستيراد هنا

function App() {
  const { toast } = useToast();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
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
