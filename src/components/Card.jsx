import React from "react";

export function Card() {
  return (
    <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    <div className="sm:order-last sm:shrink-0">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        className="size-16 rounded-full object-cover sm:size-[72px]"
      />
    </div>

    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg font-medium text-pretty text-gray-900">
        How I built my first website with Nuxt, Tailwind CSS and Vercel
      </h3>

      <p className="mt-1 text-sm text-gray-700">By John Doe</p>

      <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
        maiores deleniti consectetur nobis et eaque.
      </p>
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div>
      <dt className="text-sm font-medium text-gray-700">Published on</dt>

      <dd className="text-xs text-gray-700">31/06/2025</dd>
    </div>

    <div>
      <dt className="text-sm font-medium text-gray-700">Reading time</dt>

      <dd className="text-xs text-gray-700">12 minutes</dd>
    </div>
  </dl>
</a>    
  );
}

