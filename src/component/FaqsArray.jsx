import React, { useState } from 'react';

export const FaqsArray = ({ searchTerm }) => {
  const faqs = [
    {
      question: "Q1: How does it work?",
      answer: "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile."
    },
    {
      question: "Q2: Is it safe to use every night?",
      answer: "Yes, the diffuser is made from 100% drug-free, plant-based ingredients, making it safe for nightly use."
    },
    {
      question: "Q3: How long does one refill last?",
      answer: "A single refill typically lasts about 30 uses, depending on the duration and frequency of each session."
    },
    {
      question: "Q4: Can I use it while traveling?",
      answer: "Absolutely! The compact design makes it easy to carry in your bag, so you can use it anywhere."
    },
    {
      question: "Q5: Are there any side effects?",
      answer: "There are no known side effects, as our ingredients are natural and plant-based. However, if you have specific allergies, please consult a doctor."
    },
    {
      question: "Q6: How should I clean the diffuser?",
      answer: "To clean the diffuser, simply wipe it down with a soft, damp cloth. Avoid using harsh chemicals or abrasive materials."
    },
    {
      question: "Q7: What if I don't like the scent?",
      answer: "We recommend trying it out in a small area first. If you still don’t like it, we offer a satisfaction guarantee for returns."
    },
    {
      question: "Q8: Can I mix different scents?",
      answer: "Yes, you can mix different essential oils to create a custom blend. However, we recommend starting with one scent to understand its effects."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm) ||
    faq.answer.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='flex flex-col md:flex-row md:justify-between  max-w-7xl mx-auto'>
      <div className="p-4 md:w-1/4 flex flex-row md:flex-col space-x-3  lg:space-y-5">
        <p className='font-bold text-[#12305B]'>Sleepstiq <span className='bg-[#FBF9F2]'>  Product</span></p>
        <p className='text-[#12305B]'>Order</p>
        <p className='text-[#12305B]'>Melatonin</p>
      </div>
      <div className="max-w-4xl mx-auto py-4 mt-2 border-t-2 md:w-3/4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="mb-5 p-1 border-b-2 cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h2 className=" pb-2 text-[#12305B] font-medium">{faq.question}</h2>
              {activeIndex === index && (
                <p className='text-gray-700'>{faq.answer}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-700">No FAQs found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};
