# Subjects

To add your classes to your timetable, subjects are used to group your classes.
*For example; maths, science and engineering.*

## The Subjects Page
To access your subjects, head to your menu. It will be on the left hand side for desktop users, and for mobile users, open the menu by clicking the 'three lines' button in the top left corner.

![Subjects page](/img/subjects-page.png)

## Introduction
When you first get started on Subjective, your Subjects page will be blank unless you have migrated your timetable from Sentral, so you'll need to [create subjects for all your classes](#adding-a-subject).

### Sentral Import
When your timetable is imported from Sentral, Subjective automatically creates subjects for you.

Due to the limitations of Sentral timetables, subject colours are automatically derived from the subject name, meaning that people with the same subject name will have the same colour for them.

:::tip[Technical]

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

## Creating a Subject

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
