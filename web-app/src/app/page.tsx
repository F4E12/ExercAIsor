import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (
    <div className="p-10 max-w-lg mx-auto">
      {/* Subject Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <Select>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </Select>
      </div>

      {/* Number of Questions Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Number of Questions
        </label>
        <Select>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </Select>
      </div>

      {/* Topic Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Topic</label>
        <Select>
          <option value="algebra">Algebra</option>
          <option value="geometry">Geometry</option>
          <option value="calculus">Calculus</option>
        </Select>
      </div>

      {/* Generate Button */}
      <Button className="w-full mb-6">Generate</Button>

      {/* Generated Questions */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="flex items-center space-x-2">
            <span>{num}.</span>
            <Input
              className="flex-grow"
              placeholder="Generated question goes here..."
            />
          </div>
        ))}
      </div>
    </div>
  );
}
