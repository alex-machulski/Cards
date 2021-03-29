import React from "react";
import SuperInputText from "../../components/super-components/s1-SuperInputText/SuperInputText";
import SuperButton from "../../components/super-components/s2-SuperButton/SuperButton";
import SuperCheckbox from "../../components/super-components/s3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../components/super-components/s4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../components/super-components/s5-SuperSelect/SuperSelect";
import SuperRadio from "../../components/super-components/s6-SuperRadio/SuperRadio";

export const TestPage = () => {

    return (
        <div>
            <div>
                <SuperInputText value={"super input text"}/>
            </div>
            <div>
                <SuperButton>Super Button</SuperButton>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperEditableSpan value={"Super Editable Span"}/>
            </div>
            <div>
                <SuperSelect options={['value 1', 'value 2', 'value 3']}/>
            </div>
            <div>
                <SuperRadio options={['value 1', 'value 2', 'value 3']}/>
            </div>
        </div>
    )
}