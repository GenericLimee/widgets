import { useState } from 'react';
import Dropdown from './Dropdown';
import clsx from 'clsx';
// TODO: ADD TYPE PARAMS TO COMPONENT
export default function Form({
  fields,
  title,
  titlecn,
  labelcn,
  groupcn,
  formcn,
  onSubmit
}: {
  title?: string,
  titlecn?: string,
  labelcn?: string,
  groupcn?: string,
  formcn?: string,
  fields: ({
    props?: { [prop: string]: string }
    name: string,
  } & ({
    type: 'text' | 'range'
    label?: string,
  } | {
    type: 'dropdown'
    label?: string,
    options: string[]
  } | {
    type: 'submit'
  }))[]
  // eslint-disable-next-line
  onSubmit: (s: Record<string, any>) => void
}) {
  // eslint-disable-next-line
  const [state, setState] = useState<Record<string, any>>(() => {
    let newState = {};
    fields.forEach(field => {
      newState = field.type === 'submit' ? newState : {
        ...newState,
        [field.name]: field.type === 'dropdown' ? field.options[0] : ""
      };
    });
    return newState;
  });

  return (
    <div className={formcn}>
      {title && <h1 className={titlecn ?? ""}>{title}</h1>}
      {fields.map(field => field.type === 'dropdown' ? (
        <Dropdown
          key={field.name}
          closeOnClick
          label={(field.label ?? "") + " - " + state[field.name] }
          cn="rounded-xl bg-zinc-800 p-3 shadow-xl" innercn="flex flex-col items-stretch" outercn="justify-self-stretch"
        >
          {field.options.map((option, num) => (
            <div
              key={option + num}
              onClick={() => { setState({ ...state, [field.name]: option }) }}
              className={clsx("text-white text-center font-semibold p-2 rounded-xl m-2 cursor-pointer transition-colors duration-300 select-none", option === state[field.name] ? "bg-lime-800" : "bg-rose-900")}
            >{option}</div>
          ))}
        </Dropdown>
      ) : (
        <div key={field.name} className={groupcn}>
          {(field.type === 'range' || field.type === 'text') && <label className={labelcn ?? ""}>{field.label}</label>}
          <input 
            {...(field.type === "submit" 
              ? { 
                ...field.props,
                onClick: () => { onSubmit(state) } 
              } : {
                ...field.props,
                onChange: change => { setState({ ...state, [field.name]: change.target.value }) }
              }
            )}
            type={field.type}
          />
        </div>
      ))}
    </div>
  );
}