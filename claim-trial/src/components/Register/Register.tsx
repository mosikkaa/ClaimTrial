import {useForm} from 'react-hook-form'
import Error from '../Error/Error.tsx'

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const Register = () => {
    const { register, handleSubmit,reset,formState:{errors}} = useForm<FormData>();

    const onSubmit = (data:FormData) => {
        console.log("Data", data);
        alert('Registered Successfuly')
        reset()
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex bg-white p-10 flex-col justify-between gap-4 rounded-[10px]">
            <div className='flex flex-col gap-2 relative'>
                <input {...register("firstName",{required:'First Name cannot be empty',pattern:{value:/^[a-zA-zა-ჰ,.'-]+$/i,message:'First Names is not valid'},setValueAs: (value:string) => value.trim()})}  placeholder={errors.firstName ? '' : 'First Name'} type='text' className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.firstName ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'}  focus:outline-none transition-colors duration-200 ${errors.firstName ? '' : 'focus:border-[#5E54A4]'} font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px] text-[#3D3B48]`} />
                {errors.firstName && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.firstName.message as string}</p>}
                {errors.firstName && <span className="absolute top-[14px] right-7 "><Error /></span>}
            </div>
            <div className='flex flex-col relative gap-2'>
                <input {...register("lastName",{required:'Last Name cannot be empty',pattern:{value:/^[a-zA-zა-ჰ,.'-]+$/i,message:'First Names is not valid'},setValueAs: (value:string) => value.trim()})}  placeholder={errors.lastName ? '' : 'Last Name'} type='text' className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.lastName ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'}  ${errors.lastName ? '' : 'focus:border-[#5E54A4]'} focus:outline-none transition-colors duration-200 font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px] text-[#3D3B48]`} />
                {errors.lastName && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.lastName.message as string}</p>}
                {errors.lastName && <span className="absolute top-[14px] right-7 "><Error /></span>}
            </div>
            <div className='flex flex-col relative gap-2'>
                <input {...register("email",{required:'Looks like this is not an email',pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Looks like this is not an email"},setValueAs: (value:string) => value.trim()})} type='text' placeholder={errors.email ? 'email@example/com' : 'Email Address'} className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.email ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'} ${errors.email ? '' : 'focus:border-[#5E54A4]'} focus:outline-none transition-colors duration-200 font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px]  text-[#3D3B48] ${errors.email ? "placeholder-[#FF7979]" : ""}`} />
                {errors.email && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.email.message as string}</p>}
                {errors.email && <span className="absolute top-[14px] right-7 "><Error /></span>}
            </div>
            <div className='flex flex-col relative gap-2'>
                <input {...register("password",{required:'Password cannot be empty',minLength:{value:8,message:'Password must be at least 8 characters'},pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must include at least 1 uppercase letter, 1 number, and 1 symbol"}})} type='password' placeholder={errors.email ? '' : 'Password'} className={`w-full pl-7 pr-7 pt-3 pb-3 rounded-[5px] ${errors.password ? 'border-2 border-[#FF7979]' : 'border border-[#DEDEDE]'}  ${errors.password ? '' : 'focus:border-[#5E54A4]'}  focus:outline-none transition-colors duration-200 font-poppins font-semibold text-[14px] leading-[26px] tracking-[0.25px] text-[#3D3B48]`} />
                {errors.password && <p className='font-poppins font-medium text-[11px] leading-[11px] tracking-[0px] text-right text-[#FF7979]'>{errors.password.message as string}</p>}
                {errors.password && <span className="absolute top-[14px] right-7 "><Error /></span>}
            </div>
            <div className='w-full gap-2'>
                <button className='pt-3 pb-3 w-full rounded-[5px] font-poppins font-semibold text-[15px] leading-[26px] tracking-[1px] cursor-pointer hover:bg-[#38CC6B] transition-all duration-300 bg-[#38CC8B] text-white shadow-[inset_0_-4px_0_0_#00000017]'>CLAIM YOUR FREE TRIAL</button>
                <p className='font-poppins font-medium text-[11px] leading-[26px] tracking-[0px] text-[#BAB7D4] text-center'>By clicking the button, you are agreeing to our <a href='' className='font-bold text-[#FF7979]'>Terms and Services</a></p>
            </div>
        </form>
    )
}

export default Register
