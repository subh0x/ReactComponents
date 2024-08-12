import { useState } from "react";

export const Accordion = () => {

    const [selected, setSelected] = useState(null);
    const [multipleSelected, setMultipleSelected] = useState([]);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    function getFaqAnswer(currentId) {
        setSelected(selected === currentId ? null : currentId);
    }

    function selectMultipleQuestion(currentId) {
        let selectMultiple = [...multipleSelected];
        const indexOfCurrentId = selectMultiple.indexOf(currentId);

        if (indexOfCurrentId === -1)
            selectMultiple.push(currentId);
        else selectMultiple.splice(indexOfCurrentId, 1);

        setMultipleSelected(selectMultiple);
    }

    return (
        <div className="flex flex-col items-center h-screen">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="bg-slate-600 text-sm text-white rounded-full font-semibold m-2 px-4 py-2 hover:bg-slate-700">Enable Multi-Selection</button>
            {accordionData && accordionData.length > 0 ?
                (accordionData.map((dataItem) => (
                    <div className=" w-96 border-b-0 border-slate-300 rounded-md mx-4 my-1">
                        <button onClick={enableMultiSelection ? () => selectMultipleQuestion(dataItem.id) : () => getFaqAnswer(dataItem.id)}
                            className="font-semibold flex w-full justify-between gap-2 items-center p-2 transition">
                            <h3 className="text-slate-700">{dataItem.question}</h3>
                            <span className={`text-slate-700 transform transition-transform duration-300 ${selected === dataItem.id ? 'rotate-180' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </span>
                        </button>
                        {
                            enableMultiSelection ?
                                ((multipleSelected.indexOf(dataItem.id) !== -1) && <div className="text-slate-600 text-balance border-t border-slate-300 p-2">{dataItem.answer}</div>)
                                :
                                (selected === dataItem.id && <div className="text-slate-600 text-balance border-t border-slate-300 p-2">{dataItem.answer}</div>)
                        }
                    </div>
                ))
                ) : <div>No Data Available!</div>}
        </div>
    )
}


const accordionData = [
    {
        id: 1,
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase. The item must be in its original condition with all tags attached. Please include the receipt for a full refund."
    },
    {
        id: 2,
        question: "How long does shipping take?",
        answer: "Shipping typically takes 5-7 business days for standard delivery. Expedited shipping options are available at checkout, which can reduce the delivery time to 2-3 business days."
    },
    {
        id: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries around the world. International shipping costs and times vary depending on the destination. Please check our shipping page for more details."
    },
    {
        id: 4,
        question: "How can I track my order?",
        answer: "Once your order has been shipped, you will receive an email with a tracking number. You can use this tracking number on our website or the carrier's website to track your package."
    },
    {
        id: 5,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also accept payments via PayPal and Apple Pay."
    },
    {
        id: 6,
        question: "Can I change or cancel my order?",
        answer: "If your order has not yet been processed, you can change or cancel it by contacting our customer service team. Once the order has been processed, we are unable to make any changes."
    },
    {
        id: 7,
        question: "Do you offer gift wrapping?",
        answer: "Yes, we offer gift wrapping services for an additional fee. You can select the gift wrapping option at checkout and include a personalized message if desired."
    },
    {
        id: 8,
        question: "How do I contact customer support?",
        answer: "You can contact our customer support team via email, phone, or live chat. Our support hours are Monday to Friday, 9 AM to 5 PM (EST). You can find all the contact details on our 'Contact Us' page."
    }
];