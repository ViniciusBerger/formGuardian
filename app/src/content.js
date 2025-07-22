const sensitivePatterns = [
  /ssn/i,
  /credit(card)?/i,
  /cvv|cvc/i,
  /passport/i,
  /driver'?s?_?license/i
];



function showWarning(form, content) {
  const warning = document.createElement("div");
  warning.textContent = content;
  warning.style = "background: red; color: white; padding: 10px; font-size: 14px;";
  window.alert(warning.textContent);
}

console.log("content loaded")

document.querySelectorAll("form").forEach(form=> {
    const inputs = form.querySelectorAll("input, textarea");

    for (let input in inputs) {
        let text = `${input.name} ${input.id} ${input.placeholder}`;
        let isSensitive = sensitivePatterns.some(pattern => pattern.test(text));
        const action = form.action || "";
        let isInsecure = location.protocol !== "https:" || !action.startsWith("https")


        if (isInsecure) {
          let content = "⚠️ Warning: This is an insecure connection."
          showWarning(form, content)
          break;
        }
        else if (isSensitive && isInsecure) {
          let content = "⚠️ Warning: This form is asking for sensitive info on an insecure connection."
          showWarning(form, content)
          break;
        }

        
    }
})


