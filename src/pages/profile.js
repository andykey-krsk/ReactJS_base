import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProfileComponent } from "../components"
import { changeProfileInfo, toggleCheckbox } from "../store/profile"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

export function Profile() {
  //const { firstName } = useSelector((state) => state.profile.user)
  //const nameVisible = useSelector((state) => state.profile.nameVisible)
  const profileContent = useSelector((state) => state.profile.user)
  const { isEnabled, user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const classes = useStyles()
  const [value, setValue] = useState(profileContent.theme)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <ProfileComponent
      content={
        // <div>
        //   <button onClick={() => dispatch(toggleNameVisible())}>
        //     toggle name
        //   </button>
        //   {nameVisible && <h2>name visible: {firstName}</h2>}
        // </div>

        <div className={classes.root}>
          <h2>{user.firstName}</h2>
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={() => dispatch(toggleCheckbox())}
          />
          <form className={classes.root} autoComplete="off">
            <div>
              <TextField
                id="name"
                label="Имя"
                value={profileContent.firstName}
              />
            </div>
            <div>
              <TextField id="surname" label={profileContent.surName} />
            </div>
            <div>
              <TextField id="city" label={profileContent.city} />
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Тема</FormLabel>
                <RadioGroup
                  aria-label="Тема"
                  name="theme"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="light"
                    control={<Radio />}
                    label="Light"
                  />
                  <FormControlLabel
                    value="dark"
                    control={<Radio />}
                    label="Dark"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => dispatch(changeProfileInfo())}
              >
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      }
    />
  )
}
