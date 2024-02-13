import { useEffect } from 'react'
import { useFieldArray } from 'react-hook-form'
import { FormSection } from './FormSection'
import { LabeledInput } from '../../../core/LabeledInput'

import { useDispatch } from 'react-redux'
import { setData } from '../../../../slice/DataSlice'

export function ProfileSection(props) {
  const { fields, append } = useFieldArray({ name: 'basics.links' })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setData(fields))
  }, [fields])

  console.log('props', fields)

  //console.log('nom', fields)
  return (
    <FormSection title="Your personal info">
      <LabeledInput
        name="basics.name"
        label="Full name"
        placeholder="John Smith"
      />
      <LabeledInput
        name="basics.email"
        label="Email"
        placeholder="johnsmith@gmail.com"
      />
      <LabeledInput
        name="basics.phone"
        label="Phone number"
        placeholder="(555) 464-6446"
      />
      <LabeledInput
        name="basics.location.address"
        label="Location"
        placeholder="Seattle, WA"
      />
      {/* {fields.map((field, index) => (
          <input key={field.id} name={`basics.links.${index}`} />
        ))}
        <button onClick={() => append('')}>Add</button> */}
    </FormSection>
  )
}
