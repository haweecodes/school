import { useState } from "react";

const Collapsible = ({
    title,
    content,
    index,
}: {
    title: React.ReactNode;
    content: React.ReactNode;
    index: number;
}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsible = () => {
        setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
    };

    return (
        <>
            <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                    onClick={toggleCollapsible}

                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    data-accordion-target={`#accordion-collapse-body-${index}`}
                    aria-expanded="true"
                    aria-controls={`accordion-collapse-body-${index}`}
                >
                    {title}
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 shrink-0 ${isCollapsed ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div className={`my-4 ${isCollapsed ? "hidden" : ""} px-4`}>{content} </div>
        </>
    );
};

export default Collapsible;
