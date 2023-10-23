import { useState } from "react"

const Contact = () => {
    type ValidationErrors = {
        name?: string;
        phone?: string;
        email?: string;
        subject?: string;
        message?: string;
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState(({} as ValidationErrors));

    const handleChange = (e: Event) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        const validationErrors: ValidationErrors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };

        if (!formData.name.trim()) {
            validationErrors.name = "name is required";
        }

        if (!formData.email) {
            validationErrors.email = "email is required"
        }

        if (!formData.subject.trim()) {
            validationErrors.subject = "subject is required";
        }

        if (!formData.message.trim()) {
            validationErrors.message = "message is required";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            (document as any).contactForm.submit();
        }
    }
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
            <form
                name="contactForm"
                action='https://getform.io/f/bce49fd6-28c7-4c01-804a-ea91f92022ad' method='POST' encType='multipart/form-data'
                onSubmit={() => handleSubmit}
            >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name*</label>
                        <input
                            className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'
                            placeholder="Your Name"
                            onChange={() => handleChange}
                        />{errors.name && <span className="text-red-600">{errors.name}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input
                            className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone'
                            onChange={() => handleChange}
                        />
                        {errors.phone && <span className="text-red-600">{errors.phone}</span>}
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>E-mail*</label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'
                        onChange={() => handleChange}
                    />
                    {errors.email && <span className="text-red-600">{errors.email}</span>}
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject*</label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'
                        onChange={() => handleChange}
                    />
                    {errors.subject && <span className="text-red-600">{errors.subject}</span>}
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message*</label>
                    <textarea
                        className='border-2 rounded-lg p-3 border-gray-300' rows={10} name='message'
                        onChange={() => handleChange}
                    />
                    {errors.message && <span className="text-red-600">{errors.message}</span>}
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact