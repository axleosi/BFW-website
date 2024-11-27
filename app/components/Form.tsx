"use client"
import React from 'react'
import {Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Form.module.css'
import emailjs from '@emailjs/browser';

emailjs.init("7UA1FxQ0uyY-TmKq1");

interface EmailParams {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    description: string;
}

const Form = () => {
    const formik=useFormik({
        initialValues:{
            fname:'',
            lname:'',
            email:'',
            phone:'',
            description:'',
        },
        validationSchema: Yup.object({
            fname: Yup.string().required('First name is required'),
            lname: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            description: Yup.string().min( 15, 'Description needs to be at least 15 caharacters'),
          }),
          onSubmit: (values, {resetForm}) => {
            sendMail(values);
            resetForm()
          }
    })

    const sendMail = (params:EmailParams) => {
        const emailParams = {
            name: `${params.fname} ${params.lname}`,
            email: params.email,
            phone: params.phone,
            message: `${params.description}, My email is ${params.email} and my number is ${params.phone}`, 
        };

        emailjs.send('service_7tpxyup', 'template_11xcz17', emailParams as unknown as Record<string, unknown>)
            .then(() => {
                alert('Email sent!');
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                alert('Failed to send email. Please try again.');
            });
    };
  return (
    <div className={styles.con}>
    <h3>How can we help?</h3>

    <form className={styles.formCon} onSubmit={formik.handleSubmit}>
        <p>Fields with * must be filled out.</p>
        <div className={styles.formG}>
            <div className={styles.formInd}>
                <label htmlFor='fname'>First Name*</label>
                <input 
                    type='text' 
                    id='fname' 
                    name='fname' 
                    value={formik.values.fname} 
                    placeholder='Please fill in your name' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-describedby={formik.touched.fname && formik.errors.fname ? 'fname-error' : undefined}
                />
                {formik.touched.fname && formik.errors.fname && (
                    <div id='fname-error' className={styles.error}>{formik.errors.fname}</div>
                )}
            </div>

            <div className={styles.formInd}>
                <label htmlFor='lname'>Last Name*</label>
                <input 
                    type='text' 
                    id='lname' 
                    name='lname' 
                    value={formik.values.lname} 
                    placeholder='Please fill in your name' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-describedby={formik.touched.lname && formik.errors.lname ? 'lname-error' : undefined}
                />
                {formik.touched.lname && formik.errors.lname && (
                    <div id='lname-error' className={styles.error}>{formik.errors.lname}</div>
                )}
            </div>

            <div className={styles.formInd}>
                <label htmlFor='email'>Email Address*</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    value={formik.values.email} 
                    placeholder='Please fill in your Email' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-describedby={formik.touched.email && formik.errors.email ? 'email-error' : undefined}
                />
                {formik.touched.email && formik.errors.email && (
                    <div id='email-error' className={styles.error}>{formik.errors.email}</div>
                )}
            </div>

            <div className={styles.formInd}>
                <label htmlFor='phone'>Phone Number</label>
                <input 
                    type='tel' 
                    id='phone' 
                    name='phone' 
                    value={formik.values.phone} 
                    placeholder='Please fill in your Phone Number' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-describedby={formik.touched.phone && formik.errors.phone ? 'phone-error' : undefined}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <div id='phone-error' className={styles.error}>{formik.errors.phone}</div>
                )}
            </div>

            <div className={styles.formInd}>
                <label htmlFor='description'>Describe briefly what you need*</label>
                <textarea 
                    id='description' 
                    name='description' 
                    value={formik.values.description} 
                    placeholder='Describe your needs' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-describedby={formik.touched.description && formik.errors.description ? 'description-error' : undefined}
                />
                {formik.touched.description && formik.errors.description && (
                    <div id='description-error' className={styles.error}>{formik.errors.description}</div>
                )}
            </div>

            <button type='submit' disabled={formik.isSubmitting} className={styles.button}>Submit</button>
        </div>
    </form>
</div>
  )
}

export default Form