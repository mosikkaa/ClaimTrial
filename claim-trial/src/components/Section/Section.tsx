import {useForm} from 'react-hook-form'
import error from '../../assets/error.svg'

const Section = () => {
    const { register, handleSubmit,reset,formState:{errors}} = useForm();



    const onSubmit = (data:any) => {
        console.log("Data", data);
        alert('Registered Successfuly')
        reset()
        window.location.reload();
    };


    const ErrorSVG = () => (
        <img src={error} alt="error" />
    )



    return (
        <section className={`pt-[10%] pb-[10%] pr-[11%] pl-[11%] w-full h-full bg-[url('/src/assets/background.svg')] flex gap-4 items-center justify-between`}>

            <div className='w-1/2 flex flex-col gap-8'>
                <h1 className='font-poppins font-bold text-white text-[50px] leading-[55px] tracking-[-0.52px]'>Learn to code by watching others</h1>
                <span className='text-white font-bold text-[16px] leading-[26px]'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </span>
            </div>

            <div className='w-1/2 flex flex-col gap-6'>

                <p className='font-poppins font-bold text-[15px] leading-[26px] shadow-[0_8px_0_0_rgba(0,0,0,0.15)] text-white tracking-[0.27px] flex items-center justify-center bg-[#5E54A4] w-full rounded-[10px] pt-3 pb-3'>Try it free 7 days <a className='font-poppins font-normal text-[15px] leading-[26px] tracking-[0.27px] text-center'>then $20/mo. thereafter</a></p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex bg-white p-10 flex-col justify-between gap-4  rounded-[10px]">
                    <div className='flex flex-col gap-2 relative'>
                        <input {...register("FirstName",{required:'First Name cannot be empty',pattern:{value:/^[a-zA-z,.'-]+$/i,message:'First Names is not valid'}})}  placeholder={errors.FirstName ? '' : 'First Name'} type='text' className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.FirstName ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'}  focus:outline-none transition-colors duration-200 ${errors.FirstName ? '' : 'focus:border-[#5E54A4]'} font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px] text-[#3D3B48]`} />
                        {errors.FirstName && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.FirstName.message as string}</p>}
                        {errors.FirstName && (<span className="absolute top-[14px] right-7 "><ErrorSVG /></span>)}
                    </div>
                    <div className='flex flex-col relative gap-2'>
                        <input {...register("LastName",{required:'Last Name cannot be empty',pattern:{value:/^[a-zA-z,.'-]+$/i,message:'First Names is not valid'}})}  placeholder={errors.LastName ? '' : 'Last Name'} className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.LastName ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'}  ${errors.LastName ? '' : 'focus:border-[#5E54A4]'} focus:outline-none transition-colors duration-200 font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px] text-[#3D3B48]`} />
                        {errors.LastName && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.LastName.message as string}</p>}
                        {errors.LastName && (<span className="absolute top-[14px] right-7 "><ErrorSVG /></span>)}
                    </div>
                    <div className='flex flex-col relative gap-2'>
                        <input {...register("email",{required:'Looks like this is not an email',pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Looks like this is not an email"}})} placeholder={errors.email ? 'email@example/com' : 'Email Address'} className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.email ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'} ${errors.email ? '' : 'focus:border-[#5E54A4]'} focus:outline-none transition-colors duration-200 font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px]  text-[#3D3B48] ${errors.FirstName ? "placeholder-[#FF7979]" : ""}`} />
                        {errors.email && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.email.message as string}</p>}
                        {errors.email && (<span className="absolute top-[14px] right-7 "><ErrorSVG /></span>)}
                    </div>
                    <div className='flex flex-col relative gap-2'>
                        <input {...register("password",{required:'Password cannot be empty',minLength:{value:8,message:'Password must be at least 8 characters'},pattern: {value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, message: "Password must include at least 1 uppercase letter, 1 number, and 1 symbol"}})} placeholder={errors.email ? '' : 'Password'} className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.password ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'}  ${errors.password ? '' : 'focus:border-[#5E54A4]'}  focus:outline-none transition-colors duration-200 font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px] text-[#3D3B48]`} />
                        {errors.password && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.password.message as string}</p>}
                        {errors.password && (<span className="absolute top-[14px] right-7 "><ErrorSVG /></span>)}
                    </div>
                    <div className='w-full gap-2'>
                        <button className='pt-3 pb-3 w-full rounded-[5px] font-poppins font-semibold text-[15px] leading-[26px] tracking-[1px] cursor-pointer hover:bg-[#38CC6B] transition-all duration-300 bg-[#38CC8B] text-white shadow-[inset_0_-4px_0_0_#00000017]'>CLAIM YOUR FREE TRIAL</button>
                        <p className='font-poppins font-medium text-[11px] leading-[26px] tracking-[0px] text-[#BAB7D4] text-center'>By clicking the button, you are agreeing to our <a href='' className='font-bold text-[#FF7979]'>Terms and Services</a></p>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default Section