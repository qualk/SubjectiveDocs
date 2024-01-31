# Subjects

A subject stores information about a class, such as a name, colour, icon, and locations.

On the Subjects page, you can view all of your subjects, and add, edit, and delete subjects.

:::tip[Technical]

When a subject is imported from Sentral, it is automatically added to the Subjects page.

The colour is automatically chosen based on the subject name, meaning that people with the same subject name will have the same colour for them.

The subject name to colour algorithm is as follows:

1. Hash the subject name using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm.
2. Convert the hash to a hexadecimal string.
3. Take the first 6 characters of the string.
4. Convert each byte to a number.
5. For each colour in the Subjective colour palette, calculate the difference between the colour and the subject colour.
6. Choose the colour that is not already taken with the smallest difference.

:::

## Viewing Subjects

Each subject is displayed as a card, with the subject name, icon, locations, and colour displayed on the background.

On desktop, switch between *Stack* and *Grid* view by pressing the button in the top left.

## Adding a Subject

1. Press the *'+'* button in the bottom right.
2. Choose a name, an icon, some locations, and a colour to represent the subject.
    1. Press the *'+'* button to add a location.
    2. Press the bin button to remove a location.
    3. Press the location to edit it.
3. Press *'Add'* to add the subject.

## Editing a Subject

1. Press the *'Edit'* button on the top right.
2. Press the *'Edit'* button under the subject you want to edit.
3. Edit the subject's name, icon, locations, and colour. The changes will be saved automatically.
    1. Press the *'+'* button to add a location.
    2. Press the bin button to remove a location.
    3. Press the location to edit it.
4. Press the *'Done'* button on the top right to finish editing the subject.

## Deleting a Subject

1. Press the *'Edit'* button on the top right.
2. Press the *'Delete'* button under the subject you want to delete.
3. Press the *'Done'* button on the top right to finish editing the subject.
