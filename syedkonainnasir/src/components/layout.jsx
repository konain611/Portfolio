import Footer from "./Footer";

export default function HomepageLayout({
  firstRow,
  secondRowBig,
  secondRowSmall1,
  secondRowSmall2,
  thirdRowLeft,
  thirdRowMiddle,
  thirdRowRight,
  fourthRowLeft,
  fourthRowMiddle,
  fourthRowRight,
}) {
  return (
    <div className="flex flex-col items-start gap-2 p-1 min-h-screen">
      <div className="w-full flex-1">
        <div className="w-full text-center">
          {firstRow || (
            <div className="text-sm sm:text-base">First Row (Full Width)</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-[50%_0.5fr_1fr]">
        <div className="flex items-center justify-center border border-(--border)/40 hover:border-(--border)/60 rounded-md min-h-40 ">
          <div className="w-full text-center">
            {secondRowBig || (
              <div className="text-sm sm:text-base">Second Row - Big Block</div>
            )}
          </div>
        </div>
        <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60">
          <div className="w-full text-center">
            {secondRowSmall1 || (
              <div className="text-sm sm:text-base">Small 1</div>
            )}
          </div>
        </div>
        <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60  min-h-40">
          <div className="w-full text-center">
            {secondRowSmall2 || (
              <div className="text-sm sm:text-base">Small 2</div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-[40%_1fr_1fr]">
                <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60 ">
          <div className="w-full">
            {thirdRowLeft || (
              <div className="text-sm sm:text-base">Third Row - Left Block</div>
            )}
          </div>
        </div>

        <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60 ">
          <div className="w-full">
            {thirdRowMiddle || (
              <div className="text-sm sm:text-base">Third Row - Middle Block</div>
            )}
          </div>
        </div>

        <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60 flex min-h-30">
          <div className="w-full text-center">
            {thirdRowRight || (
              <div className="text-sm sm:text-base">Third Row - Middle Block</div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-[40%_24%_35%]">
        <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60 min-h-30">
          <div className="w-full text-center">
            {fourthRowLeft || (
              <div className="text-sm sm:text-base">Fourth Row - Left Block</div>
            )}
          </div>
        </div>

        <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60 min-h-30">
          <div className="w-full text-center">
            {fourthRowMiddle || (
              <div className="text-sm sm:text-base">Fourth Row - Middle Block</div>
            )}
          </div>
        </div>

        <div className="border border-(--border)/40 rounded-md hover:border-(--border)/60 min-h-30">
          <div className="w-full text-center">
            {fourthRowRight || (
              <div className="text-sm sm:text-base">Fourth Row - Right Block</div>
            )}
          </div>
        </div>
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
