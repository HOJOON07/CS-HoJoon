# Container/Presentational Pattern

Enforce separation of concerns by separating the view from the application logic.

## Overview

We can use the Container/Presentational pattern to separate the logic of a component from the view. To achieve this, we need to have a:

Presentational Component, that cares about how data is shown to the user.
Container Component, that cares about what data is shown to the user.
For example, if we wanted to show listings on the landing page, we could use a container component to fetch the data for the recent listings, and use a presentational component to actually render this data.
