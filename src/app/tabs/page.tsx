import { TabsExample } from "./tabs";

export default function AnchorPositionPage() {
  return (
    <div className="container mx-auto px-4 py-40">
      <h1 className="text-3xl font-bold mb-6">Tabs</h1>
      <TabsExample className="mb-6" />
      <div className="opacity-50">Here is some content after the tabs</div>
    </div>
  );
}
