import FakeItemsTable from "@/components/fake-items-table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FakeItemsTable />
    </main>
  );
}
