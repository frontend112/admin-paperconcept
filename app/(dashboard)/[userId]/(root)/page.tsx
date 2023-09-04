import AddStore from "@/components/add-store"
import SelectSore from "@/components/select-store"
import { UserButton } from "@clerk/nextjs"
const Page = () => {

  return (
    <nav className="flex justify-between p-4">
      <section className="flex gap-2">
        <SelectSore
          items={["paperconept", "cake"]}
          buttonName="choose a store"
        />
        <AddStore title="store" />
      </section>
      <UserButton afterSignOutUrl="/" />
    </nav>

  )
}

export default Page