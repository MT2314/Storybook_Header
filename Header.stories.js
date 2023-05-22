import { type } from "@testing-library/user-event/dist/type/index.js";
import { Header } from "../Header.js"

export default {
    title: "Components/Header",
    component: Header,
    argTypes: {
        rows: { control: { type: "" } },
        headers: { control: { type: "" } },
    }
}

const Template = args => <Header  {...args} />

export const Default = Template.bind({})

Default.args = {
    rows: [
        ['This', 'is', 'just', 'a', 'test'],
        ['This', 'is', 'also', 'a', 'test'],
        ['Just', 'a', 'little', 'more', 'data'],
        ['Row', 'number', 'four', 'right', 'here'],
    ],
    headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};