import { useState } from 'react';
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
  fields: {
    label?: string,
    name: string,
    type: string,
    props?: { [prop: string]: string }
  }[]
  onSubmit: (s: { [prop: string]: string }) => void
}) {
  const [state, setState] = useState<{ [prop: string]: string }>(() => {
    let newState = {};
    fields.forEach(field => {
      newState = {
        ...newState,
        [field.name]: null
      };
    });
    return newState;
  });

  return (
    <div className={formcn}>
      {title && <h1 className={titlecn ?? ""}>{title}</h1>}
      {fields.map(field => (
        <div key={field.name} className={groupcn}>
          {field.label && <label className={labelcn ?? ""}>{field.label}</label>}
          <input 
            {...(field.type === "submit" 
              ? { 
                ...field.props,
                onClick: () => {onSubmit(state)} 
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