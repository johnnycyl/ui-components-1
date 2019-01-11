### Form Control Wrappers

```jsx
  <VerticalForm>
      <VerticalForm.LeftAlignControls>
        <Button
           type='primary'
        >
          Left aligned controls
        </Button>
        <Button
          type='neutral'
        >
          Cancel
        </Button>
      </VerticalForm.LeftAlignControls>
    <VerticalForm.RightAlignControls>
      <Button
        type='neutral'
      >
        Cancel
      </Button>
      <Button
         type='primary'
      >
        Right aligned controls
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```


### Form Field


Basic field

```jsx
const { TextInput } = require('../../Inputs');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
        type='neutral'
      >
        Cancel
      </Button>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with description

```jsx
const { TextInput } = require('../../Inputs');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      description='This is a test description'
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with action message

```jsx
const { TextInput } = require('../../Inputs');
const { TextLink } = require('../../Links');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      actionMessage={
            <TextLink
              onClick={(e)=> {
                e.preventDefault();
                alert('I am the action message')
              }}
              textType='small'
            >
              Click Here!
            </TextLink>
            }
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with tooltip

```jsx
const { TextInput } = require('../../Inputs');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      tooltipMessage='I am a test tooltip'
      tooltipProps={{width: 100}}
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```

Field with errors & required

```jsx
const { TextInput } = require('../../Inputs');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      isRequired
      label='This is a test input'
      errorMessages={[
        'You can pass in an array of error messages. (Or just a single string)',
        'Each error will be on a separate line :)'  
      ]}
    >
      <TextInput
        isInvalid={true}
        isRequired={true}
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <VerticalForm.RightAlignControls>
      <Button
         type='primary'
      >
        Submit me :)
      </Button>
    </VerticalForm.RightAlignControls>
  </VerticalForm>
```