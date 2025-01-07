import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF7CD]">
      <Button
        className={cn(
          "bg-[#D946EF] text-white hover:bg-[#D946EF]/90 transition-all duration-300",
          "px-8 py-6 text-lg font-medium rounded-md"
        )}
      >
        Click Me More!!! again
      </Button>
    </div>
  );
};

export default Index;
