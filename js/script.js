$(document).ready(function() {
  validateTextInput = (inputName) => {
    const regExp = /['"]/g
    const input = $(`[data-validation="${inputName}"]`);
    const value = input.val().trim();
    if (!input.next(".error").length) {
      input.after("<div class='error'></div>")
    }
    if (!value.length) {
      input.next(".error").show().html('This field is required')
      return false;
    }
    if (regExp.test(value)) {
      input.next(".error").show().html('Do not use characters: \' or \"')
      return false;
    }
    input.next(".error").hide();
    return true;
  }
  validateBirthdayInput = (inputName) => {
    const input = $(`[data-validation="${inputName}"]`);
    const today = new Date();
    let dateInputValue = input.val();
    date = new Date(dateInputValue)
    if (!input.next(".error").length) {
      input.after("<div class='error'></div>")
    }
    if (!dateInputValue.length) {
      input.next(".error").show().html('This field is required')
      return false;
    }
    if (date > today) {
      input.next(".error").show().html('You birthday can\'t be in future');
      return false;
    }
    input.next(".error").hide();
    return true;
  }
  validateGenderRadio = (inputName) => {
    const input = $(`[data-validation="${inputName}"]`);
    const checkbox = $("input[name='gender']:checked");

    if (!input.next(".error").length) {
      input.after("<div class='error error-radio'></div>")
    }
    
    if(checkbox.length == 0){
      input.next(".error").show().html('Please select a format')
      return false;
    }
    input.next(".error").hide();
    return true;
  }
  validateEmailInput = (inputName) => {
    const regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const input = $(`[data-validation="${inputName}"]`);
    const value = input.val().trim();
    if (!input.next(".error").length) {
      input.after("<div class='error'></div>")
    }
    if (!value.length) {
      input.next(".error").show().html('This field is required')
      return false;
    }
    if (!regEmail.test(value)) {
      input.next(".error").show().html('Email address is not valid')
      return false;
    }
    input.next(".error").hide();
    return true;
  }
  validatePasswordInput = (inputName) => {
    const regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/
    const input = $(`[data-validation="${inputName}"]`);
    const value = input.val().trim();
    if (!input.next(".error").length) {
      input.after("<div class='error'></div>")
    }
    if (!value.length) {
      input.next(".error").show().html('This field is required')
      return false;
    }
    if (!regPass.test(value)) {
      input.next(".error").show().html('Сontains at least 8 characters: at least one letter and one number')
      return false;
    }
    input.next(".error").hide();
    return true;
  }
  validateCountrySelect = (inputName) => {
    const input = $(`[data-validation="${inputName}"]`);
    const select = $('#country').val();

    if (!input.next(".error").length) {
      input.after("<div class='error'></div>")
    }
    if (select.length == 0) {
      input.next(".error").show().html('Value is set to a invalid option')
      return false;
    }
    input.next(".error").hide();
    return true;
  }

   allInputsValid = () => {
    return (validateTextInput('firstName') && validateTextInput('lastName') && validateBirthdayInput('birthday') && validateGenderRadio('gender') && validateCountrySelect('country') && validateEmailInput('email') && validatePasswordInput('password') && validateTextInput('address'));
  }

  $('form').submit((e) => {
    e.preventDefault();
    validateTextInput('firstName');
    validateTextInput('lastName');
    validateBirthdayInput('birthday');
    validateGenderRadio('gender');
    validateCountrySelect('country');
    validateEmailInput('email');
    validatePasswordInput('password');
    validateTextInput('address');
    allInputsValid();

  })
});