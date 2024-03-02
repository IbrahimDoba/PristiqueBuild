import React from 'react';

function Contact() {
  return (
    <main>
      <section className='min-h-[90vh] grid place-content-center text-center'>
        <h1 className='text-4xl'>Contact</h1>
        <p>
          Want to do business with us? fill the form and we&apos;ll get back to
          you Asap
        </p>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea id='message' rows={5} />
          </div>
          <button type='submit'>Send</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
