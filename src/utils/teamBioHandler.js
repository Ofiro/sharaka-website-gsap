import { getDataAttribute } from "../animations/configs/config";

/**
 * Handles the team member popup when hovered.
 */
export function handleTeamBioPopup() {
  /**
   * Attach a 'mouseover' event listener to each team member element.
   */
  const teamMembers = document.querySelectorAll('.team_member_item');
  teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
      // Retrieve data attributes from the member element
      const name = getDataAttribute(member, 'name');
      const role = getDataAttribute(member, 'role');
      const bio = getDataAttribute(member, 'bio');

      // Update the team bio popup content
      updateTeamBioPopupContent(name, role, bio);
    });
  });
}

/**
 * Updates the content of the team bio popup.
 * 
 * @param {string} name - The name of the team member.
 * @param {string} role - The role of the team member.
 * @param {string} bio - The bio of the team member.
 */
function updateTeamBioPopupContent(name, role, bio) {
  const popupNameElement = document.querySelector('.team_bio_popup .team_member_name');
  const popupRoleElement = document.querySelector('.team_bio_popup .team_member_role');
  const popupBioElement = document.querySelector('.team_bio_popup .team_member_bio');

  popupNameElement.textContent = name;
  popupRoleElement.textContent = role;
  popupBioElement.textContent = bio;
}
