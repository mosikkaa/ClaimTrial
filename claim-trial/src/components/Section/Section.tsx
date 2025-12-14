import Register from "../Register/Register.tsx";

const Section = () => {
    return (
        <section className={`pt-[10%] pb-[10%] pr-[11%] pl-[11%] w-full h-full bg-[url('/src/assets/background.svg')] flex gap-4 items-center justify-between`}>

            <div className='w-1/2 flex flex-col gap-8'>
                <h1 className='font-poppins font-bold text-white text-[50px] leading-[55px] tracking-[-0.52px]'>Learn to code by watching others</h1>
                <span className='text-white font-bold text-[16px] leading-[26px]'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </span>
            </div>

            <div className='w-1/2 flex flex-col gap-6'>
                <p className='font-poppins font-bold text-[15px] leading-[26px] shadow-[0_8px_0_0_rgba(0,0,0,0.15)] text-white tracking-[0.27px] flex items-center justify-center bg-[#5E54A4] w-full rounded-[10px] pt-3 pb-3'>Try it free 7 days <a className='font-poppins font-normal text-[15px] leading-[26px] tracking-[0.27px] text-center'>then $20/mo. thereafter</a></p>
                <Register/>
            </div>

        </section>
    )
}

export default Section