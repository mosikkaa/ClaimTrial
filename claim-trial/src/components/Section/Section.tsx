import Register from "../Register/Register.tsx";

const Section = () => {
    return (
        <section className={`md:pt-[6%] md:pb-[6%] md:pr-[11%] md:pl-[11%] pb-[12%] pt-[12%] pr-[6%] pl-[6%] w-full min-h-screen md:h-full bg-[url('/src/assets/background.svg')] md:flex-row flex-col flex md:gap-4 gap-12 items-center justify-between`}>

            <div className='md:w-1/2 w-full flex flex-col md:gap-8 gap-6'>
                <h1 className='font-poppins font-bold text-white md:text-[50px] text-[28px] leading-[36px] md:leading-[55px] tracking-[-0.29px] md:text-start text-center md:tracking-[-0.52px]'>Learn to code by watching others</h1>
                <span className='text-white font-medium md:text-start text-center md:font-bold text-[16px] leading-[26px]'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </span>
            </div>

            <div className='md:w-1/2 w-full flex flex-col gap-6'>
                <p className='font-poppins font-bold text-[15px] leading-[26px] shadow-[0_8px_0_0_rgba(0,0,0,0.15)] text-white tracking-[0.27px] flex items-center justify-center bg-[#5E54A4] w-full rounded-[10px] pt-3 pb-3 text-center'>Try it free 7 days    <a className='font-poppins font-normal text-[15px] leading-[26px] tracking-[0.27px] text-center ml-1'> then $20/mo. thereafter</a></p>
                <Register/>
            </div>

        </section>
    )
}

export default Section