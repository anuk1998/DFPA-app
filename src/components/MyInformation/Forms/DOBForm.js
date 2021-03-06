import * as React from "react";
import {Form, Item, Picker, Label, Input} from 'native-base';

export default function DOBForm({ month, setMonth, day, setDay, year, setYear }) {

  function getDayOptions() {
    let options = [];
    for (let i = 1; i <= 31; i++) {
      options.push(<Picker.Item label={i} value={i} key={i} />)
    }
    return options;
  }

  function getYearOptions() {
    let options = [];
    for (let i = 2021; i >= 1920; i--) {
      options.push(<Picker.Item label={i} value={i} key={i} />)
    }
    return options;
  }

  return (
    <Form>
      <Item picker>
        <Picker
          mode="dropdown"
          placeholder="Select month"
          selectedValue={month}
          onValueChange={setMonth}
        >
          <Picker.Item label="January" value={1} />
          <Picker.Item label="February" value={2} />
          <Picker.Item label="March" value={3} />
          <Picker.Item label="April" value={4} />
          <Picker.Item label="May" value={5} />
          <Picker.Item label="June" value={6} />
          <Picker.Item label="July" value={7} />
          <Picker.Item label="August" value={8} />
          <Picker.Item label="September" value={9} />
          <Picker.Item label="October" value={10} />
          <Picker.Item label="November" value={11} />
          <Picker.Item label="December" value={12} />
        </Picker>
      </Item>
      <Item picker>
        <Picker mode="dropdown"
                placeholder="Select day"
                selectedValue={day}
                onValueChange={setDay}>
          {getDayOptions()}
        </Picker>
      </Item>
      <Item picker>
        <Picker mode="dropdown"
                placeholder="Select year"
                selectedValue={year}
                onValueChange={setYear}>
          {getYearOptions()}
        </Picker>
      </Item>
    </Form>
  );
}