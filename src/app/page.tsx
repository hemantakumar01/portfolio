import AnimateLayout from "@/components/AnimateLayout";
import Left from "@/components/Left";
import Middle from "@/components/Middle";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-wrap xl:flex-nowrap px-1">
      <div className="w-full max-w-[600px]    ">
        <Left />
      </div>
      <div className="flex flex-col-reverse xl:flex-row">
        <Middle />
        <div className="xl:min-w-[200px] xl:max-w-[200px] right w-full py-10">
          <div className="   flex justify-center items-center flex-col xl:fixed ">
            <AnimateLayout>
              <Image
                src={"/icons/hemanta-kumar-paswan.png"}
                width={180}
                height={180}
                alt="profile"
                className="border-primary border-[2px] rounded-full w-[180px] h-[180px] "
              />
            </AnimateLayout>
            <AnimateLayout>
              <div className="">
                <span className="text-[#E25170]">Hemanta Paswan</span>
              </div>
            </AnimateLayout>
          </div>
        </div>
      </div>
    </main>
  );
}
