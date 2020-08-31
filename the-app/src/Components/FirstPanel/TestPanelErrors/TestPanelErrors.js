import React from 'react'
import * as Yup from 'yup'

const adultYears = new Date(Date.now() - 567648000000)

const SignupSchema = Yup.object().shape({
   userName: Yup.string()
      .min(3, 'Too short name!')
      .max(18, 'Too long name!')
      .required('You should enter you name')
      .matches(/^((?!fuck)(?!bitch)(?!shit).)*$/, 'Be polite. Dont use bad words!')
      .matches(/^([a-zA-Z\-\s])+([a-zA-Z\-]+\s)*[a-zA-Z]+$/, 'Please use only Latin letters A-Z and "-"'),
   gender: Yup.string().required('Choose your gender'),
   birthday: Yup.date().max(adultYears, 'Sorry, you should be more then 18 years'),
   fishingStyle: Yup.string().required('Choose your fishing style'),
   favoriteFishes: Yup.array()
      .min(2, 'Too less fishes')
      .max(3, 'Too many fishes')
      .required('Choose your favorite fish')
      .nullable(),
})

export default SignupSchema
