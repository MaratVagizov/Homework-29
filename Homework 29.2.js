function percent(total, broken) {
    let percent = 100 * broken / total;
    console.log(`The percent of broken parts is ${percent}%`);
}

percent(200, 50)