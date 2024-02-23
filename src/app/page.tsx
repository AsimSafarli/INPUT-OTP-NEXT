import Image from "next/image";
import { BaseOTPInput } from "./components/base-input";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center h-screen p-24">
      <BaseOTPInput/>
    </main>
  );
}
