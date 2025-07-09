import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 " + inter.className}>
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full max-w-2xl mx-auto">
        {/* Buttons Section */}
        <section className="w-full flex flex-col gap-4 p-6 border rounded-xl bg-background shadow-md">
          <h2 className="text-lg font-bold mb-2">Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Input Fields Section */}
        <section className="w-full flex flex-col gap-4 p-6 border rounded-xl bg-background shadow-md">
          <h2 className="text-lg font-bold mb-2">Input Fields</h2>
          <form className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Name</span>
              <Input placeholder="Enter your name" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Email</span>
              <Input type="email" placeholder="Enter your email" />
            </label>
            <Button type="submit">Submit</Button>
          </form>
        </section>

        {/* Card Component Section */}
        <section className="w-full flex flex-col gap-4 p-6 border rounded-xl bg-background shadow-md">
          <h2 className="text-lg font-bold mb-2">Card Component</h2>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a card description using shadcn/ui.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content. You can use this area to display information or actions.</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Secondary Action</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
