import { Fragment } from 'react'
import { useFieldArray } from 'react-hook-form'
import { FormSection } from './FormSection'
import { LabeledInput } from '../../../core/LabeledInput'
import { AddButton } from '../../../core/Button'
import { Divider } from '../../../core/Divider'

export function EducationSection() {
  const { fields, append } = useFieldArray({ name: 'education' })

  return (
    <FormSection title="Your Educational Background">
      <LabeledInput
        name="headings.education"
        label="Section Heading"
        placeholder="Education"
      />
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Divider />
          <LabeledInput
            name={`education.${index}.institution`}
            label="School name"
            placeholder="Rutgers University"
          />
          <LabeledInput
            name={`education.${index}.studyType`}
            label="Degree"
            placeholder="Bachelor's"
          />
          <LabeledInput
            name={`education.${index}.area`}
            label="Major"
            placeholder="Computer Science"
          />
          <LabeledInput
            name={`education.${index}.startDate`}
            label="Start Date"
            placeholder="Sep 2015"
          />
          <LabeledInput
            name={`education.${index}.endDate`}
            label="End Date"
            placeholder="Jun 2019"
          />
        </Fragment>
      ))}
      <AddButton type="button" onClick={() => append({})}>
        + Add School
      </AddButton>
    </FormSection>
  )
}
