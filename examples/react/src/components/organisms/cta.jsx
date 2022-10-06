import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../atoms/button';

export default function CTA({ title, description }) {
  return (
    <div
      data-elb="cta"
      data-elbaction="visible"
      className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span data-elb-cta={`title:${title}`} className="block">
          {title}
        </span>
        <span className="block">{description}</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <ButtonPrimary action="start" label="Get started" />
        </div>
        <div className="ml-3 inline-flex">
          <ButtonSecondary action="learn" label="Learn more" />
        </div>
      </div>
    </div>
  );
}
