export const ReviewContainer = () => {
    return (
        <div className="flex justify-center">
            <div className="relative">
                <div className="flex items-center justify-center bg-[radial-gradient(75.00%_90.00%_at_50.00%_98.00%,rgba(252,58,33,0.40)_0%,rgba(0,0,0,0.80)_100%)] rounded-2xl border border-white/25  m-auto mt-5 z-20 p-[30px] px-20 sm:px-28 md:px-36 lg:px-44">
                    <div className="flex flex-col items-center justify-center font-sans bg-[radial-gradient(250.00%_150.00%_at_50.00%_30.00%,rgba(0,0,0,0.80)_0%,rgba(252,58,33,0.50)_100%)] backdrop-blur-lg border border-white/25 rounded-2xl h-[108px] w-[242px] py-2 scroll-px-0.5 z-30">
                        <div className="text-white font-semibold text-sm">
                            Awards
                        </div>
                        <div className="flex text-white justify-center my-2">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="#F3604C" viewBox="0 0 24 24" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-white text-xs font-medium">(4.7) based on 477 reviews</span>
                    </div>
                </div>
                <div className="sm: absolute top-2 left-0 w-full h-full overflow-hidden z-10">
                    <div className="flex space-x-12 animate-loop-scroll h-full items-center">
                        <img src='src/assets/gka-2022.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                        <img src='src/assets/pow-1.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                        <img src='src/assets/gka-2018.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                        <img src='src/assets/pod-1.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                        <img src='src/assets/gka-2022.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                        <img src='src/assets/pow-1.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                        <img src='src/assets/gka-2018.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                        <img src='src/assets/pod-1.png' className="h-14 opacity-50 filter brightness-0 saturate-100 invert" />
                    </div>
                </div>
            </div>
        </div>
    )
}
