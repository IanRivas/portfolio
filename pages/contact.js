import React from 'react'
import Mailer from '../components/Mailer'

export default function Contact(props) {
  const { contact } = props.form
  return (
    <>
      <Mailer contact={contact} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)

  return {
    props: {
      form: response.default.form
    }
  }
}
