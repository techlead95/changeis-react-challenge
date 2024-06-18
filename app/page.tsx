import { getFakeItems } from "@/components/apis/fake-items";
import FakeItemsTable from "@/components/fake-items-table";

export default async function Home() {
  const initialData = await getFakeItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FakeItemsTable initialData={initialData} />
    </main>
  );
}
