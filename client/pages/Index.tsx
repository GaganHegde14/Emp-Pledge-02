import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Understanding Compliance");
  const [isChecked, setIsChecked] = useState(true);

  const tabs = [
    "Understanding Compliance",
    "Understanding Compliance Generative AI & AI Ethics (R&D)",
    "Privacy Training",
    "SRI-B POSH Training",
    "Contract Management"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full h-[60px] bg-gradient-to-r from-slate-100 to-slate-200 relative">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/187f539e46fc354b2ae1011c441cca39640435dc?width=2892" 
          alt="Header background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 text-xs text-samsung-text">
          <button className="flex items-center gap-2 hover:text-samsung-color">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z" fill="currentColor"/>
            </svg>
          </button>
          <span>My Workspace &gt; Diversity, Equity & Inclusion Module Training Video</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-6">
          <div className="flex items-start gap-4 mb-6">
            {/* Avatar with profile image pattern */}
            <div className="relative">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_avatar" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                  <path d="M24 0C10.7452 0 0 10.7452 0 24V24.036C0 37.2908 10.7092 48 23.964 48H24C37.2548 48 48 37.2908 48 24.036V24C48 10.7452 37.2908 0 24.036 0H24Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_avatar)">
                  <rect width="48" height="48" fill="#4F9CF9"/>
                  <circle cx="24" cy="20" r="8" fill="white"/>
                  <circle cx="24" cy="44" r="16" fill="white"/>
                </g>
                <rect x="32.5" y="33.5" width="13" height="13" rx="6.5" fill="#04802E"/>
                <rect x="32.5" y="33.5" width="13" height="13" rx="6.5" stroke="white"/>
              </svg>
              <div className="absolute top-1 right-1 w-3 h-3 bg-samsung-color-3 rounded-full"></div>
            </div>

            {/* Header content */}
            <div className="flex-1">
              <h1 className="text-xl font-bold text-samsung-text leading-tight">
                <span className="text-xl">SELF Essentials: Diversity, Equity & Inclusion Module</span>
                <span className="text-sm font-bold"> - Report</span>
              </h1>

              {/* Employee name and info positioned below avatar */}
              <div className="mt-4 flex items-start gap-8">
                <div className="flex flex-col gap-1">
                  <div className="font-bold text-sm text-samsung-text">Manoj Kandan M</div>
                  <div className="font-bold text-sm text-samsung-text">Gen ID: 25504878</div>
                  <div className="text-sm text-samsung-text">Manoj.kandan@partner.samsung.com</div>
                </div>
              </div>
            </div>

            {/* Clock icon in top right */}
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-samsung-color" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.4064 13.0314L10.0364 11.0314V6.50139C10.0364 6.10139 9.71638 5.78139 9.31638 5.78139H9.25638C8.85638 5.78139 8.53638 6.10139 8.53638 6.50139V11.2214C8.53638 11.5714 8.71638 11.9014 9.02638 12.0814L12.6764 14.2714C13.0164 14.4714 13.4564 14.3714 13.6564 14.0314C13.8664 13.6814 13.7564 13.2314 13.4064 13.0314ZM18.7164 2.79139L15.6364 0.23139C15.2164 -0.11861 14.5864 -0.0686096 14.2264 0.36139C13.8764 0.78139 13.9364 1.41139 14.3564 1.77139L17.4264 4.33139C17.8464 4.68139 18.4764 4.63139 18.8364 4.20139C19.1964 3.78139 19.1364 3.15139 18.7164 2.79139ZM1.63638 4.33139L4.70638 1.77139C5.13638 1.41139 5.19638 0.78139 4.83638 0.36139C4.48638 -0.0686096 3.85638 -0.11861 3.43638 0.23139L0.356383 2.79139C-0.0636172 3.15139 -0.123617 3.78139 0.236383 4.20139C0.586383 4.63139 1.21638 4.68139 1.63638 4.33139ZM9.53638 1.78139C4.56638 1.78139 0.536383 5.81139 0.536383 10.7814C0.536383 15.7514 4.56638 19.7814 9.53638 19.7814C14.5064 19.7814 18.5364 15.7514 18.5364 10.7814C18.5364 5.81139 14.5064 1.78139 9.53638 1.78139ZM9.53638 17.7814C5.67638 17.7814 2.53638 14.6414 2.53638 10.7814C2.53638 6.92139 5.67638 3.78139 9.53638 3.78139C13.3964 3.78139 16.5364 6.92139 16.5364 10.7814C16.5364 14.6414 13.3964 17.7814 9.53638 17.7814Z"/>
              </svg>
            </div>
          </div>

          {/* Employee Info */}
        <div className="bg-white border border-samsung-grey-light rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
            <div className="md:col-span-2 xl:col-span-1">
              <div className="font-bold text-sm text-samsung-text mb-1">Manoj Kandan M</div>
              <div className="font-bold text-sm text-samsung-text mb-1">Gen ID: 25504878</div>
              <div className="text-sm text-samsung-text">Manoj.kandan@partner.samsung.com</div>
            </div>

            <div className="xl:col-span-1">
              <div className="text-sm text-samsung-color-3 mb-1">Designation</div>
              <div className="font-bold text-sm text-samsung-text">Outsourcing</div>
            </div>

            <div className="xl:col-span-1">
              <div className="text-sm text-samsung-color-3 mb-1">Division</div>
              <div className="font-bold text-sm text-samsung-text break-words">Tech Strategy Team\Smart Infra Group\Information System & AI Tools</div>
            </div>

            <div className="xl:col-span-1">
              <div className="text-sm text-samsung-color-3 mb-1">Manager</div>
              <div className="font-bold text-sm text-samsung-text">Ravindra S R (06786669)</div>
            </div>
          </div>
        </div>
        </div>

        {/* Required Information Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 26" fill="none">
              <path d="M2.66667 26C1.93333 26 1.30556 25.7454 0.783333 25.2362C0.261111 24.7271 0 24.115 0 23.4V5.2C0 4.485 0.261111 3.87292 0.783333 3.36375C1.30556 2.85458 1.93333 2.6 2.66667 2.6H8.26667C8.55556 1.82 9.03889 1.19167 9.71667 0.715C10.3944 0.238333 11.1556 0 12 0C12.8444 0 13.6056 0.238333 14.2833 0.715C14.9611 1.19167 15.4444 1.82 15.7333 2.6H21.3333C22.0667 2.6 22.6944 2.85458 23.2167 3.36375C23.7389 3.87292 24 4.485 24 5.2V23.4C24 24.115 23.7389 24.7271 23.2167 25.2362C22.6944 25.7454 22.0667 26 21.3333 26H2.66667ZM2.66667 23.4H21.3333V5.2H2.66667V23.4ZM5.33333 20.8H14.6667V18.2H5.33333V20.8ZM5.33333 15.6H18.6667V13H5.33333V15.6ZM5.33333 10.4H18.6667V7.8H5.33333V10.4ZM12 4.225C12.2889 4.225 12.5278 4.13292 12.7167 3.94875C12.9056 3.76458 13 3.53167 13 3.25C13 2.96833 12.9056 2.73542 12.7167 2.55125C12.5278 2.36708 12.2889 2.275 12 2.275C11.7111 2.275 11.4722 2.36708 11.2833 2.55125C11.0944 2.73542 11 2.96833 11 3.25C11 3.53167 11.0944 3.76458 11.2833 3.94875C11.4722 4.13292 11.7111 4.225 12 4.225Z" fill="#28303F"/>
            </svg>
            <h2 className="text-xl font-bold text-samsung-grey-900">Required Information</h2>
          </div>
        </div>

        {/* Training Videos Section */}
        <div className="bg-samsung-blue-bg rounded-lg p-6 mb-6">
          <h3 className="text-base font-bold text-samsung-text-primary mb-4">Self Essential Training Videos</h3>
          
          {/* Tab Navigation */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-2 mb-6 min-w-max">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg'
                      : 'bg-samsung-toggle-bg text-samsung-text-primary hover:bg-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Video Content Area */}
          <div className="bg-white rounded-lg p-8 min-h-[400px] flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-samsung-color rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-samsung-grey-900 mb-2">Self Essential Training Videos</h4>
              <p className="text-sm text-samsung-color-3">Aenean aliquet lectus vestibulum gravida sed vulputate vitae.</p>
            </div>
          </div>
        </div>

        {/* Compliance Checkbox */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <button
              onClick={() => setIsChecked(!isChecked)}
              className="mt-1 flex-shrink-0"
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                isChecked
                  ? 'bg-samsung-color-3 border-samsung-color-3'
                  : 'border-samsung-color-3 bg-white'
              }`}>
                {isChecked && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 10">
                    <path
                      d="M1 5L4.5 8.5L11 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
            <p className="text-sm text-samsung-grey-900 leading-relaxed">
              I have attended the online annual compliance training videos and hereby ensure compliance of the same
            </p>
          </div>
        </div>

        {/* View Policies */}
        <div className="mb-8">
          <button className="flex items-center gap-3 text-samsung-color-3 hover:text-samsung-color transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M16.875 8.65039V16.2578C16.875 16.9481 16.6309 17.5374 16.1428 18.0256C15.6546 18.5137 15.0653 18.7578 14.375 18.7578H5.625C4.93464 18.7578 4.34539 18.5137 3.85723 18.0256C3.36908 17.5374 3.125 16.9481 3.125 16.2578V3.75781C3.125 3.06746 3.36908 2.4782 3.85723 1.99005C4.34539 1.50189 4.93464 1.25781 5.625 1.25781H9.48242C9.73104 1.25785 9.97017 1.30543 10.1998 1.40055C10.4294 1.49567 10.6321 1.6311 10.8079 1.80684L16.3259 7.32485C16.5017 7.50066 16.6372 7.70338 16.7323 7.93301C16.8274 8.16265 16.8749 8.40184 16.875 8.65039ZM15.625 8.65049C15.625 8.56763 15.6091 8.48793 15.5774 8.41139C15.5457 8.33485 15.5006 8.2673 15.442 8.20874L9.92412 2.69082C9.86553 2.63224 9.79797 2.5871 9.72142 2.55539C9.64487 2.52369 9.56521 2.50783 9.48242 2.50781H5.625C5.27982 2.50781 4.98519 2.62985 4.74112 2.87393C4.49704 3.118 4.375 3.41263 4.375 3.75781V16.2578C4.375 16.603 4.49704 16.8976 4.74112 17.1417C4.98519 17.3858 5.27982 17.5078 5.625 17.5078H14.375C14.7202 17.5078 15.0148 17.3858 15.2589 17.1417C15.503 16.8976 15.625 16.603 15.625 16.2578V8.65049Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10 1.57031C9.65482 1.57031 9.375 1.85014 9.375 2.19531V6.88281C9.375 7.40058 9.55806 7.84252 9.92417 8.20864C10.2903 8.57476 10.7322 8.75781 11.25 8.75781H15.9375C16.2827 8.75781 16.5625 8.47798 16.5625 8.13281C16.5625 7.78764 16.2827 7.50781 15.9375 7.50781H11.25C11.0774 7.50781 10.9301 7.44679 10.8081 7.32475C10.686 7.20271 10.625 7.0554 10.625 6.88281V2.19531C10.625 1.85014 10.3452 1.57031 10 1.57031ZM6.25 11.2578C6.25 11.603 6.52983 11.8828 6.875 11.8828H13.125C13.4702 11.8828 13.75 11.603 13.75 11.2578C13.75 10.9126 13.4702 10.6328 13.125 10.6328H6.875C6.52983 10.6328 6.25 10.9126 6.25 11.2578ZM6.25 14.3828C6.25 14.728 6.52983 15.0078 6.875 15.0078H13.125C13.4702 15.0078 13.75 14.728 13.75 14.3828C13.75 14.0376 13.4702 13.7578 13.125 13.7578H6.875C6.52983 13.7578 6.25 14.0376 6.25 14.3828Z"/>
            </svg>
            <span className="text-sm">View Policies</span>
          </button>
        </div>
      </div>
    </div>
  );
}
