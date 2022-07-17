import React from 'react';
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import HowItWorks from "../HowItWorks/HowItWorks";

const MOCK_STEPS = [
  {
    id: 'd11b10ba',
    stepNumber: 2,
    versionContent: [
      {
        title: 'Request a Delivery',
        body: 'Request a Delivery body',
        effectiveDate: '2019-05-04T03:04:05.000Z'
      },
      {
        title: 'We Deliver',
        body: 'We Deliver body',
        effectiveDate: '2019-04-04T05:04:05.000Z'
      }
    ]
  },
  {
    id: 'dce2554e',
    stepNumber: 4,
    versionContent: [
      {
        title: 'Request another Delivery',
        body: 'Request another Delivery body',
        effectiveDate: '2019-05-20T03:04:05.000Z'
      }
    ]
  },
  {
    id: '422e6b50',
    stepNumber: 3,
    versionContent: [
      {
        title: 'Keep what you like',
        body: 'Keep what you like body',
        effectiveDate: '2019-04-04T03:04:05.000Z'
      },
      {
        title: 'Keep what you want',
        body: 'Keep what you want body',
        effectiveDate: '2019-04-04T05:04:05.000Z'
      },
      {
        title: 'Keep everything',
        body: 'Keep everything body',
        effectiveDate: '2019-02-04T08:04:05.000Z'
      }
    ]
  },
  {
    id: 'd9a439d0',
    stepNumber: 1,
    versionContent: [
      {
        title: 'Fill out a Profile',
        body: 'Fill out a Profile body',
        effectiveDate: '2018-05-20T03:04:05.000Z'
      },
      {
        title: 'Complete Profile',
        body: 'Complete Profile body',
        effectiveDate: '2019-05-20T03:04:05.000Z'
      }
    ]
  }
];

afterAll(() => {
  global.fetch.mockClear();
});

it('should render correct steps in ascending order', async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_STEPS)
    })
  );

  await act(async () => {
    render(<HowItWorks />);
  });

  const steps = screen.queryAllByTestId('step');
  expect(steps[0]).toHaveTextContent('01' + 'Complete Profile' + 'Complete Profile body');
  expect(steps[1]).toHaveTextContent('02' + 'Request a Delivery' + 'Request a Delivery body');
  expect(steps[2]).toHaveTextContent('03' + 'Keep what you want' + 'Keep what you want body');
  expect(steps[3]).toHaveTextContent('04' + 'Request another Delivery' + 'Request another Delivery body');
});
