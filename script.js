document.addEventListener('DOMContentLoaded', function() {
    const injurySelect = document.getElementById('injurySelect');
    const principleSelect = document.getElementById('principleSelect');
    const treatmentInfo = document.getElementById('treatmentInfo');
    const principleInfo = document.getElementById('principleInfo');
    const filterBar = document.getElementById('filterBar');
    const toggleFilter = document.getElementById('toggleFilter');
    const injuryCount = document.getElementById('injuryCount');
    const principleCount = document.getElementById('principleCount');
    const chips = document.querySelectorAll('.chip');
    const clearFilters = document.getElementById('clearFilters');

    let activeFilters = new Set();

    function updateChipCounts() {
        const rankCounts = {};
        Object.values(treatmentData).forEach(data => {
            rankCounts[data.rank] = (rankCounts[data.rank] || 0) + 1;
        });

        chips.forEach(chip => {
            const rank = chip.dataset.rank;
            const count = rankCounts[rank] || 0;
            chip.querySelector('.chip-count').textContent = count;
        });
    }

    function populateDropdowns() {
        injurySelect.innerHTML = '<option value="">Select an Injury/Condition...</option>';
        principleSelect.innerHTML = '<option value="">Select a Principle...</option>';

        const filteredInjuries = Object.entries(treatmentData).filter(([_, data]) => 
            activeFilters.size === 0 || activeFilters.has(data.rank)
        );

        filteredInjuries.forEach(([injury, _]) => {
            const option = document.createElement('option');
            option.value = injury;
            option.textContent = injury;
            injurySelect.appendChild(option);
        });

        Object.keys(principlesData).forEach(principle => {
            const option = document.createElement('option');
            option.value = principle;
            option.textContent = principle;
            principleSelect.appendChild(option);
        });

        injuryCount.textContent = `${filteredInjuries.length} items`;
        principleCount.textContent = `${Object.keys(principlesData).length} items`;
    }

    injurySelect.addEventListener('change', function() {
        const selectedInjury = this.value;
        if (selectedInjury) {
            const data = treatmentData[selectedInjury];
            document.getElementById('selectedInjury').querySelector('span').textContent = selectedInjury;
            document.getElementById('requiredRank').textContent = data.rank;
            document.getElementById('treatment').textContent = data.treatment;
            document.getElementById('stitching').textContent = data.stitching ? 'Yes' : 'No';
            document.getElementById('notes').textContent = data.notes;
            treatmentInfo.classList.remove('d-none');
        } else {
            treatmentInfo.classList.add('d-none');
        }
    });

    principleSelect.addEventListener('change', function() {
        const selectedPrinciple = this.value;
        if (selectedPrinciple) {
            const data = principlesData[selectedPrinciple];
            document.getElementById('selectedPrinciple').querySelector('span').textContent = selectedPrinciple;
            document.getElementById('principleContent').innerHTML = data.content;
            principleInfo.classList.remove('d-none');
        } else {
            principleInfo.classList.add('d-none');
        }
    });

    toggleFilter.addEventListener('click', () => {
        filterBar.classList.toggle('d-none');
    });

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const rank = chip.dataset.rank;
            if (activeFilters.has(rank)) {
                activeFilters.delete(rank);
                chip.classList.remove('active');
            } else {
                activeFilters.add(rank);
                chip.classList.add('active');
            }
            populateDropdowns();
        });
    });

    clearFilters.addEventListener('click', () => {
        activeFilters.clear();
        chips.forEach(chip => chip.classList.remove('active'));
        populateDropdowns();
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#filterBar') && !e.target.closest('#toggleFilter')) {
            filterBar.classList.add('d-none');
        }
    });

    updateChipCounts();
    populateDropdowns();
});
