import Tuner from "@/components/tuner";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  return (
    <div>
      <Tuner />
    </div>
  );
}
