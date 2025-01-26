// test
const principlesData = {
    "ALS Model": {
        content: `
            <div class="principle-steps">
                <div class="step">
                    <span class="step-number">1</span>
                    <p>Identified patient being unresponsive and not breathing.</p>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <p>Begin CPR right away.</p>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <p>Assess rhythm</p>
                </div>
            </div>
            <div class="principle-notes">
                <div class="note">
                    <strong>If Shockable:</strong> shock with DEFIB
                </div>
                <div class="note">
                    <strong>If No ROSC:</strong> Resume CPR
                </div>
                <div class="note">
                    <strong>If ROSC:</strong> Continue with treatment
                </div>
                <div class="note info">
                    <i class="fas fa-info-circle"></i>
                    <em>ROSC is return of spontaneous circulation i.e. pulse is back</em>
                </div>
            </div>`
    },
    "HOTT Principle": {
        content: `
            <div class="principle-explanation">
                <p>HOTT is used to assess the patient for life-threatening conditions that would affect the cycle of resuscitation.</p>
            </div>
            <div class="principle-breakdown">
                <div class="breakdown-item">
                    <strong>H</strong> - Hypovolaemia
                </div>
                <div class="breakdown-item">
                    <strong>O</strong> - Oxygenation
                </div>
                <div class="breakdown-item">
                    <strong>T</strong> - Tension Pneumothorax
                </div>
                <div class="breakdown-item">
                    <strong>T</strong> - Tamponade
                </div>
            </div>
            <div class="principle-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <p>If any of these principles were identified, the first step is to resolve them before beginning resuscitation!</p>
            </div>`
    },
    "PIT Manouver": {
        content: `
            <div class="principle-explanation">
                <p>We use PIT to provide a more structured approach to dealing with cardiac arrest situations.</p>
            </div>
            <div class="principle-list">
                <h5>Key aspects of the pit crew include:</h5>
                <ul>
                    <li>Ensuring there is a 360 degree access to the patient</li>
                    <li>Keeping calm and concise communication at all times</li>
                    <li>Using the 'cardiac arrest checklist'</li>
                    <li>Identify a team manager to manage the cardiac arrest team</li>
                </ul>
            </div>
            <div class="principle-conclusion">
                <p>This helps ensure the team are able to deliver different elements of resuscitation efficiently and effectively.</p>
            </div>`
    },
    "METHANE": {
        content: `
            <div class="methane-grid">
                <div class="methane-item">
                    <strong>M</strong> - Major incident declared
                </div>
                <div class="methane-item">
                    <strong>E</strong> - Exact Location
                </div>
                <div class="methane-item">
                    <strong>T</strong> - Type of Incident (E.g. Major RTC)
                </div>
                <div class="methane-item">
                    <strong>H</strong> - Hazards
                </div>
                <div class="methane-item">
                    <strong>A</strong> - Access (Best approach, what postal)
                </div>
                <div class="methane-item">
                    <strong>N</strong> - Number (Number/Type of casualties)
                </div>
                <div class="methane-item">
                    <strong>E</strong> - Emergency services needed (HEMS/HART)
                </div>
                <div class="methane-item">
                    <strong>R</strong> - Request a channel
                </div>
            </div>`
    }
};
