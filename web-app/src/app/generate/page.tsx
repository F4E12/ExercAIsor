import BackButton from "@/components/ui/backhome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Generate() {
  return (
    <div className="p-10 max-w-lg mx-auto bg-background text-foreground">
      <BackButton />

      {/* Subject Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-secondary-foreground">
          Subject
        </label>
        <Select>
          <SelectTrigger className="w-[180px] bg-card text-card-foreground border border-border">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent className="bg-card text-card-foreground">
            <SelectItem value="math">Math</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="history">History</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Number of Questions Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-secondary-foreground">
          Number of Questions
        </label>
        <Select>
          <SelectTrigger className="w-[180px] bg-card text-card-foreground border border-border">
            <SelectValue placeholder="Select Quantity" />
          </SelectTrigger>
          <SelectContent className="bg-card text-card-foreground">
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="15">15</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Topic Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-secondary-foreground">
          Topic
        </label>
        <Select>
          <SelectTrigger className="w-[180px] bg-card text-card-foreground border border-border">
            <SelectValue placeholder="Select Topic" />
          </SelectTrigger>
          <SelectContent className="bg-card text-card-foreground">
            <SelectItem value="algebra">Algebra</SelectItem>
            <SelectItem value="geometry">Geometry</SelectItem>
            <SelectItem value="calculus">Calculus</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Generate Button */}
      <Button className="w-full mb-6 bg-primary text-primary-foreground hover:bg-primary/80">
        Generate
      </Button>

      {/* Generated Questions */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="flex items-center space-x-2">
            <span>{num}.</span>
            <Input
              className="flex-grow bg-card text-card-foreground border border-border"
              placeholder="Generated question goes here..."
            />
          </div>
        ))}
      </div>
    </div>
  );
}
