import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DatePicker } from "./date-picker.component";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { filtersModule } from "~src/shared";
import "~src/shared/i18n/i18n.models.mocks";

const store = createStore(filtersModule.reducers, {});

describe("DatePicker", () => {
  test("Opens the datepicker on date button click", async () => {
    const getSelectedDateMock = jest.fn();
    const handleDateClearMock = jest.fn();
    const selectedDate = undefined;
    const { getByText } = render(
      <Provider store={store}>
        <DatePicker
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDateMock}
          handleDateClear={handleDateClearMock}
        />
      </Provider>
    );
    const button = getByText("Date");
    fireEvent.click(button);
    await wait(() => expect(getByText("Apply")).toBeInTheDocument());
  });

  test("selected from and to dates should be applied on apply button click", async () => {
    const getSelectedDateMock = jest.fn();
    const handleDateClearMock = jest.fn();
    const selectedDate = undefined;
    const defaultDateFrom = new Date();
    defaultDateFrom.setMonth(1);
    const defaultDateTo = new Date();
    defaultDateTo.setMonth(2);
    const defaultDate = { from: defaultDateFrom, to: defaultDateTo };
    const disabledDate = () => false;
    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <DatePicker
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDateMock}
          handleDateClear={handleDateClearMock}
          defaultCalendarValue={[defaultDate.from, defaultDate.to]}
          disabledDate={disabledDate}
        />
      </Provider>
    );

    const button = getByText("Date");
    fireEvent.click(button);
    await wait(async () => {
      const from = getAllByText("24");
      fireEvent.click(from[0]);
      const to = getAllByText("25");
      fireEvent.click(to[0]);
      const apply = getByText("Apply");
      fireEvent.click(apply);
    });
    await wait(() => {
      expect(getByText("24 Feb - 25 Feb")).toBeInTheDocument();
    });
  });

  test("Today should be applied on Today button click from date picker", async () => {
    const getSelectedDateMock = jest.fn();
    const handleDateClearMock = jest.fn();
    const selectedDate = undefined;
    const { getByText } = render(
      <Provider store={store}>
        <DatePicker
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDateMock}
          handleDateClear={handleDateClearMock}
        />
      </Provider>
    );
    const button = getByText("Date");
    fireEvent.click(button);
    await wait(async () => {
      const today = getByText("Today");
      fireEvent.click(today);
      await wait(() => {
        expect(getByText("Today")).toBeInTheDocument();
      });
    });
  });

  test("clear selected dates on clear icon click", async () => {
    const getSelectedDateMock = jest.fn();
    const handleDateClearMock = jest.fn();
    const selectedDate = undefined;
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <DatePicker
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDateMock}
          handleDateClear={handleDateClearMock}
        />
      </Provider>
    );
    const button = getByText("Date");
    fireEvent.click(button);
    await wait(async () => {
      const today = getByText("Today");
      fireEvent.click(today);
      await wait(async () => {
        const clear = getByRole("button");
        fireEvent.click(clear);
        await wait(() => expect(getByText("Date")).toBeInTheDocument());
      });
    });
  });
});
